export class BooleanCalculator {
    private readonly validTokens = ["TRUE", "FALSE", "NOT", "AND", "OR"];
    private booleanExpression: string = "";

    private checkBooleanExpression(booleanExpression: string) {
        if (booleanExpression.length === 0) 
            throw new Error('Boolean expression is empty');
        if (!booleanExpression.split(' ').every(x => this.validTokens.includes(x))) 
            throw new Error('Boolean expression contains invalid values');
    }

    public evaluate(booleanExpression: string): boolean {
        this.checkBooleanExpression(booleanExpression);
        return (/true/i).test(booleanExpression);
    }
}