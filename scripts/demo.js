const Escrow = require("../contracts/escrow");

function runDemo() {
    console.log("=== GenLayer AI Escrow Demo ===\n");

    const escrow = new Escrow();

    escrow.deposit(100, "Buyer_A", "Seller_B");
    escrow.submitWork();
    escrow.raiseDispute();
    escrow.resolveDispute();

    console.log("\n=== Demo Complete ===");
}

runDemo();
