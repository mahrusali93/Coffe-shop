
"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Save, Printer, FileDown } from "lucide-react";

type MenuItem = {
  name: string;
  price: number;
  quantity: number;
};

const defaultMenu: MenuItem[] = [
  { name: "Espresso", price: 20000, quantity: 0 },
  { name: "Latte", price: 25000, quantity: 0 },
  { name: "Cappuccino", price: 28000, quantity: 0 },
  { name: "Mocha", price: 30000, quantity: 0 },
];

export default function Home() {
  const [menu, setMenu] = useState(defaultMenu);
  const [promo, setPromo] = useState("Beli 2 Gratis 1 untuk Cappuccino!");
  const [loyaltyPoints, setLoyaltyPoints] = useState(0);
  const [transactions, setTransactions] = useState<any[]>([]);

  const handleAdd = (index: number) => {
    const updated = [...menu];
    updated[index].quantity += 1;

    // Dynamic pricing: increase price after 3+ orders
    if (updated[index].quantity >= 3) {
      updated[index].price = Math.floor(updated[index].price * 1.1);
    }

    setMenu(updated);
  };

  const handleRemove = (index: number) => {
    const updated = [...menu];
    if (updated[index].quantity > 0) {
      updated[index].quantity -= 1;

      // Dynamic pricing: decrease price if demand lowers
      if (updated[index].quantity < 2) {
        updated[index].price = Math.max(
          defaultMenu[index].price,
          Math.floor(updated[index].price * 0.9)
        );
      }
    }
    setMenu(updated);
  };

  const total = menu.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = loyaltyPoints >= 5 ? 0.1 * total : 0;
  const finalTotal = total - discount;

  const handlePayment = () => {
    const transaction = {
      items: menu.filter((item) => item.quantity > 0),
      total: finalTotal,
      time: new Date().toISOString(),
    };
    setTransactions([...transactions, transaction]);
    setLoyaltyPoints(loyaltyPoints + 1);
    setMenu(defaultMenu.map((item) => ({ ...item, quantity: 0 })));
  };

  const handleExport = () => {
    const header = "Waktu,Produk,Qty,Harga,Total\n";
    const rows = transactions
      .map((t) =>
        t.items
          .map(
            (i: any) =>
              \`\${t.time},\${i.name},\${i.quantity},\${i.price},\${i.price * i.quantity}\`
          )
          .join("\n")
      )
      .join("\n");

    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "transaksi.csv";
    a.click();
  };

  const handlePrint = () => {
    const struk = menu
      .filter((i) => i.quantity > 0)
      .map((i) => \`\${i.name} x\${i.quantity} = Rp \${i.price * i.quantity}\`)
      .join("\n");
    const popup = window.open("", "_blank");
    popup?.document.write(\`<pre>\${struk}\nTotal: Rp \${finalTotal}</pre>\`);
    popup?.print();
  };

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Coffee Shop POS</h1>
      <div className="text-green-600 font-medium">Promo Minggu Ini: {promo}</div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menu.map((item, index) => (
          <Card key={item.name} className="p-2">
            <CardContent className="flex flex-col items-center">
              <p className="font-semibold">{item.name}</p>
              <p>Rp {item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <Button onClick={() => handleRemove(index)}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => handleAdd(index)}>+</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-xl">
        Total: <span className="font-bold">Rp {total}</span>
        {discount > 0 && (
          <span className="text-green-600 ml-2">
            (Diskon loyalitas: -Rp {discount})
          </span>
        )}
      </div>

      <div className="flex gap-4 mt-4">
        <Button onClick={handlePayment}>Bayar dengan QRIS</Button>
        <Button variant="secondary" onClick={handleExport}>
          <FileDown className="w-4 h-4 mr-2" /> Ekspor Excel
        </Button>
        <Button variant="outline" onClick={handlePrint}>
          <Printer className="w-4 h-4 mr-2" /> Cetak Struk
        </Button>
      </div>

      <div className="text-sm text-gray-600 mt-4">
        Poin Loyalitas: {loyaltyPoints}{" "}
        {loyaltyPoints >= 5 && "(Diskon 10% aktif!)"}
      </div>
    </main>
  );
}
