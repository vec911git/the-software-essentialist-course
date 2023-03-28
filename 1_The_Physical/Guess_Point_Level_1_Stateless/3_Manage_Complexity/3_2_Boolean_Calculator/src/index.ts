export class BooleanCalculator {
    private readonly validValues = ["TRUE", "FALSE"];
    private readonly validOperators = ["NOT", "AND", "OR"];
    private readonly validTokens = this.validValues.concat(this.validOperators);
    private booleanExpression: string = "";

    private checkBooleanExpression(booleanExpression: string) {
        if (booleanExpression.length === 0) 
            throw new Error('Boolean expression is empty');
        if (!booleanExpression.split(' ').every(x => this.validTokens.includes(x))) 
            throw new Error('Boolean expression contains invalid values');
    }

    public evaluate(booleanExpression: string): boolean {
        this.checkBooleanExpression(booleanExpression);
        let tokens = booleanExpression.split(' ');
        if (tokens.length == 2)
            return !(/true/i).test(tokens[1]);
        return (/true/i).test(booleanExpression);
    }
}