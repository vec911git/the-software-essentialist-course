export class BooleanCalculator {
    private readonly validValues = ["TRUE", "FALSE"];
    private readonly validOperators = ["NOT", "AND", "OR"];
    private readonly validTokens = this.validValues.concat(this.validOperators);
    private booleanExpression: string = "";

    private checkBooleanExpression(booleanExpression: string) {
        if (booleanExpression.length === 0) 
            throw new Error('Boolean expression is empty');
        if (!booleanExpression.replace(/[^a-zA-Z0-9 ]/g, '').split(' ')
            .every(x => this.validTokens.includes(x))) 
            throw new Error('Boolean expression contains invalid values');
    }

    private processParenthesisExpression(expression: string): string {
        const parenthesisExp = expression.match(/\(.*\)/)?.pop() ?? '';
        const subExp = parenthesisExp.match(/\((.*)\)/)?.pop() ?? '';
        const resultExp = this.evaluate(subExp).toString().toUpperCase();
        return expression.replace(parenthesisExp, resultExp);
    }

    public evaluate(booleanExpression: string): boolean {
        this.checkBooleanExpression(booleanExpression);

        if (booleanExpression.includes('('))
            return this.evaluate(this.processParenthesisExpression(booleanExpression));

        if (booleanExpression.includes(' OR ')) 
            return booleanExpression.split(' OR ').some(exp => this.evaluate(exp));

        if (booleanExpression.includes(' AND '))
            return booleanExpression.split(' AND ').every(exp => this.evaluate(exp));

        if (booleanExpression === 'NOT FALSE')
            return true;
        
        return booleanExpression === 'TRUE';
    }
}