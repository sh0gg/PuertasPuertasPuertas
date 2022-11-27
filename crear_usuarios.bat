@echo off
:nuevo
set /p username: "Nuevo nombre de usuario: "
net user %username% /add
echo Nuevo usuario: 1
echo Salir:         2
set /p elegir: 
if %elegir% eq (goto nuevo)
else
exit