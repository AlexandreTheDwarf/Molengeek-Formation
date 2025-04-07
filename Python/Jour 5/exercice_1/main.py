import re

## trouvez le regex d'une carte bancaire

CardNumberRegex = re.compile(r"\d{4}-\d{4}-\d{4}-\d{4}")

stringFound = CardNumberRegex.search("mon numéro de carte bancaire est 5362-8925-1452-1452")

print(stringFound.group())

## trouvez le regex pour une adresse mail.

MailRegex = re.compile(r"\w+@\w+\.\w{2,}+")

tests = [
    "ryad@gmail.com",
    "ryad@@gmail.com",
    "ryadgmail.com",
    "ryad@.com",
    "ryad@ryad.be",
    "ryad@ryad.b"
]

print("--------------------------------")

for test in tests:
    mailFound = MailRegex.search(test)
    if mailFound:
        print(f"✔ Match trouvé : {mailFound.group()}")
    else:
        print(f"❌ Pas de match pour : {test}")

## bonus trouvez le ou les regex pour un numéro de téléphone europèen

PhoneNumberRegex = re.compile(r"^\+\d{2}\s?\d{8,9}")

tests = [
    "+32 475123456",   
    "+33 612345678",   
    "+41123456789",    
    "0032475123456",   
    "475123456"        
]

print("--------------------------------")

for test in tests:
    if PhoneNumberRegex.match(test):
        print(f"✔ Numéro avec indicatif international : {test}")
    else:
        print(f"❌ Pas d’indicatif international au début : {test}")