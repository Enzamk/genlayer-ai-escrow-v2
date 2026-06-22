function aiEvaluateDispute() {
    const outcomes = ["buyer_refund", "seller_paid"];

    const decision = Math.random() > 0.5 ? outcomes[0] : outcomes[1];

    return {
        decision,
        reasoning: `
AI Analysis:
- Work quality: ${Math.random() > 0.5 ? "Good" : "Bad"}
- Deadline: ${Math.random() > 0.5 ? "Met" : "Late"}
- Final decision: ${decision}
`
    };
}

module.exports = { aiEvaluateDispute };
