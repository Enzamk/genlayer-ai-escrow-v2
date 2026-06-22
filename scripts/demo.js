const Escrow = require("../contracts/escrow");

console.log("\n🔥 GenLayer AI Arbitration Engine v2\n");

async function runDemo() {
    console.log("=== GenLayer AI Escrow Demo ===\n");

    const escrow = new Escrow();

    escrow.deposit(100, "Buyer_A", "Seller_B");
    escrow.submitWork();
    escrow.raiseDispute();
    await escrow.resolveDispute();

    console.log("\n=== Demo Complete ===");
}

runDemo();
