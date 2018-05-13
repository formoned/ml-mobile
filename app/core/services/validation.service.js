"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    };
    ValidationService.valueChange = function (value, control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value == value) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // return null;
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmFsaWRhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFBQTtJQWtEQSxDQUFDO0lBaERRLDBDQUF3QixHQUEvQixVQUFnQyxJQUFZO1FBQzFDLElBQU0sTUFBTSxHQUFHO1lBQ2IsVUFBVSxFQUFFLFVBQVU7WUFDdEIsbUJBQW1CLEVBQUUsK0JBQStCO1lBQ3BELHFCQUFxQixFQUFFLHVCQUF1QjtZQUM5QyxpQkFBaUIsRUFBRSxzRkFBc0Y7U0FDMUcsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVNLDZCQUFXLEdBQWxCLFVBQW1CLEtBQWEsRUFBRSxPQUF3QjtRQUN4RCxpRUFBaUU7UUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN2QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLHFDQUFtQixHQUExQixVQUEyQixPQUF3QjtRQUNqRCxpRUFBaUU7UUFDakUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsdUpBQXVKLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakwsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRU0sZ0NBQWMsR0FBckIsVUFBc0IsT0FBd0I7UUFDNUMsMkJBQTJCO1FBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLHVJQUF1SSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pLLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsRUFBRSxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUN6QyxDQUFDO0lBQ0gsQ0FBQztJQUVNLG1DQUFpQixHQUF4QixVQUF5QixPQUF3QjtRQUMvQyxzRUFBc0U7UUFDdEUsOERBQThEO1FBQzlELDZDQUE2QztRQUM3QyxlQUFlO1FBQ2YsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUUsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNkLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLE1BQU0sQ0FBQyxFQUFFLGlCQUFpQixFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDO0lBQ0gsd0JBQUM7QUFBRCxDQUFDLEFBbERELElBa0RDO0FBbERZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIE9yaWdpbmFsIHZlcnNpb24gY3JlYXRlZCBieSBDb3J5IFJ5bGFuOiBodHRwczovL2NvcnlyeWxhbi5jb20vYmxvZy9hbmd1bGFyLTItZm9ybS1idWlsZGVyLWFuZC12YWxpZGF0aW9uLW1hbmFnZW1lbnRcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25TZXJ2aWNlIHtcblxuICBzdGF0aWMgZ2V0VmFsaWRhdG9yRXJyb3JNZXNzYWdlKGNvZGU6IHN0cmluZykge1xuICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICdyZXF1aXJlZCc6ICdSZXF1aXJlZCcsXG4gICAgICAnaW52YWxpZENyZWRpdENhcmQnOiAnSXMgaW52YWxpZCBjcmVkaXQgY2FyZCBudW1iZXInLFxuICAgICAgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiAnSW52YWxpZCBlbWFpbCBhZGRyZXNzJyxcbiAgICAgICdpbnZhbGlkUGFzc3dvcmQnOiAnSW52YWxpZCBwYXNzd29yZC4gUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZywgYW5kIGNvbnRhaW4gYSBudW1iZXIuJ1xuICAgIH07XG4gICAgcmV0dXJuIGNvbmZpZ1tjb2RlXTtcbiAgfVxuXG4gIHN0YXRpYyB2YWx1ZUNoYW5nZSh2YWx1ZTogc3RyaW5nLCBjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpIHtcbiAgICAvLyBWaXNhLCBNYXN0ZXJDYXJkLCBBbWVyaWNhbiBFeHByZXNzLCBEaW5lcnMgQ2x1YiwgRGlzY292ZXIsIEpDQlxuICAgIGlmIChjb250cm9sLnZhbHVlID09IHZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgJ2ludmFsaWRDcmVkaXRDYXJkJzogdHJ1ZSB9O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVkaXRDYXJkVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgIC8vIFZpc2EsIE1hc3RlckNhcmQsIEFtZXJpY2FuIEV4cHJlc3MsIERpbmVycyBDbHViLCBEaXNjb3ZlciwgSkNCXG4gICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL14oPzo0WzAtOV17MTJ9KD86WzAtOV17M30pP3w1WzEtNV1bMC05XXsxNH18Nig/OjAxMXw1WzAtOV1bMC05XSlbMC05XXsxMn18M1s0N11bMC05XXsxM318Myg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9fCg/OjIxMzF8MTgwMHwzNVxcZHszfSlcXGR7MTF9KSQvKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7ICdpbnZhbGlkQ3JlZGl0Q2FyZCc6IHRydWUgfTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZW1haWxWYWxpZGF0b3IoY29udHJvbDogQWJzdHJhY3RDb250cm9sKSB7XG4gICAgLy8gUkZDIDI4MjIgY29tcGxpYW50IHJlZ2V4XG4gICAgaWYgKGNvbnRyb2wudmFsdWUubWF0Y2goL1thLXowLTkhIyQlJicqKy89P15fYHt8fX4tXSsoPzpcXC5bYS16MC05ISMkJSYnKisvPT9eX2B7fH1+LV0rKSpAKD86W2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pP1xcLikrW2EtejAtOV0oPzpbYS16MC05LV0qW2EtejAtOV0pPy8pKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHsgJ2ludmFsaWRFbWFpbEFkZHJlc3MnOiB0cnVlIH07XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIHBhc3N3b3JkVmFsaWRhdG9yKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCkge1xuICAgIC8vIHs2LDEwMH0gICAgICAgICAgIC0gQXNzZXJ0IHBhc3N3b3JkIGlzIGJldHdlZW4gNiBhbmQgMTAwIGNoYXJhY3RlcnNcbiAgICAvLyAoPz0uKlswLTldKSAgICAgICAtIEFzc2VydCBhIHN0cmluZyBoYXMgYXQgbGVhc3Qgb25lIG51bWJlclxuICAgIC8vICg/IS4qXFxzKSAgICAgICAgICAtIFNwYWNlcyBhcmUgbm90IGFsbG93ZWRcbiAgICAvLyByZXR1cm4gbnVsbDtcbiAgICBpZiAoY29udHJvbC52YWx1ZS5tYXRjaCgvXig/PS4qXFxkKSg/PS4qW2EtekEtWiFAIyQlXiYqXSkoPyEuKlxccykuezYsMTAwfSQvKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7ICdpbnZhbGlkUGFzc3dvcmQnOiB0cnVlIH07XG4gICAgfVxuICB9XG59XG4iXX0=