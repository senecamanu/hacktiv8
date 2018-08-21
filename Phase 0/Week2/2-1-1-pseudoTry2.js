//PSEUDO NEWTON 2ND law
FIND mass
  IF not in kilogram, convert to kg
FIND acceleration
  IF not in m/s2, convert to m/s2
CALCULATE ΣF = mass multiply by acceleration (vice versa)
DISPLAY ΣF

leapyear(4)
//PSEUDO YEAR
VAR year = insert year
IF year is % 100 = 0
  THEN year % 400
    IF result is 0 = the year is a leap year
    ELSE = no, it is not a leap year
IF year % 100 is not 0
  THEN year % 4
    IF result is 0 = the year is a leap year
    ELSE = no, it is not a leap year
DISPLAY year

//PSEUDO LAUNDRY
VAR laundry = 20 (this is the laundry not inside the machine)
WHILE laundry is more than 0
  MOVE laundry into laundry machine
DISPLAY laundry

//PSEUDO KUKU
VAR murid = 40;
WHILE student is more than 0
  ASK if nails are in good condition
    IF yes THEN praise
    IF bad THEN punish
    REGARDLESS, after each student, murid is subtracted by 1
DISPLAY murid