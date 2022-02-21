function TabClick(nTab) {
    Col = document.getElementsByName("Content");
    for (i = 0; i < document.getElementsByName("Content").length; i++) {
        document.getElementsByName("tabs")[i].className = "TabBorderBottom TabCommon TabOff";
        document.getElementsByName("Content")[i].style.display = "none";
    }
    document.getElementsByName("Content")[nTab].style.display = "block";
    document.getElementsByName("tabs")[nTab].className = "TabCommon TabOn TabActiveBackground TabActiveBorderLeftRight";
}


