const { aiEvaluateDispute } = require("../utils/ai");

class Escrow {
    constructor() {
        this.balance = 0;
        this.buyer = null;
        this.seller = null;
        this.state = "INIT";
    }

    deposit(amount, buyer, seller) {
        this.balance = amount;
        this.buyer = buyer;
        this.seller = seller;
        this.state = "FUNDED";

        console.log(`Deposit: ${amount} from ${buyer} to ${seller}`);
    }

    submitWork() {
        this.state = "SUBMITTED";
        console.log("Work submitted by seller");
    }

    raiseDispute() {
        this.state = "DISPUTE";
        console.log("Dispute raised!");
    }

    resolveDispute() {
        console.log("\n--- AI Evaluating Dispute ---");

        const aiResult = aiEvaluateDispute();

        console.log(aiResult.reasoning);

        console.log("\n--- Validators Voting ---");

        const votes = [];

        for (let i = 1; i <= 3; i++) {
            const vote = Math.random() > 0.5 ? aiResult.decision : "flip";
            votes.push(vote);
            console.log(`Validator ${i}: ${vote}`);
        }

        const buyerVotes = votes.filter(v => v === "buyer_refund").length;
        const sellerVotes = votes.filter(v => v === "seller_paid").length;

        const final = buyerVotes > sellerVotes ? "buyer_refund" : "seller_paid";

        console.log("\n--- Final Consensus ---");
        console.log("Decision:", final);
    }
}

// 🔥 IMPORTANT EXPORT FIX (THIS WAS MISSING)
module.exports = Escrow;
