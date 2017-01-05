function kennitalaCheck(kennitala) {
    kennitala = kennitala.toString();
    var control = 11-
        (
            (
                (kennitala.charAt(0)*3)+
                (kennitala.charAt(1)*2)+
                (kennitala.charAt(2)*7)+
                (kennitala.charAt(3)*6)+
                (kennitala.charAt(4)*5)+
                (kennitala.charAt(5)*4)+
                (kennitala.charAt(6)*3)+
                (kennitala.charAt(7)*2)
            )
        %11);
    if (kennitala.charAt(8) != control)
        return false;
    else
        return true;
}
