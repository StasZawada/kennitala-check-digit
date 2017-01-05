# kennitala control number check
simple JavaScript function that checks if kennitala check digit is correct

ninth digit of Icelandic Social Security Number (kennitala) is a check digit
that's how it's calculated:
if kennitala is 

ABCDEF-GHIJ

I = 11 - ((3xA + 2xB + 7xC + 6xD + 5xE + 4xF + 3xG + 2xH) mod 11)
