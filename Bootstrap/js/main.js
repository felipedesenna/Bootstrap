$(function (){    
    //janela modal
    $("#modal01").modal({
        backdrop: false,
        keyboard: false
    });
    
    $("#modal01").modal("show");
    
    setTimeout(function(){
        $("#modal01").modal("hide");
    }, 3000);
    
    //tooltip
    $(".ttp").tooltip({
        animation: false,
        delay: {
            show: 1000,
            hide: 5000
        },
        title: "Titulo padrao",
        trigger: 'click'
    });
    
    //popover
    $(".ppv").popover({
        title: "Titulo padrao",
        trigger: 'hover focus'
    });
    
    //button
    $(".btnjs").button();
    
    $("#trocaestado").click(function(){
        var btn = $(this);
        btn.button("loading");
        
        setTimeout(function(){
            btn.button("reset");
        }, 3000);
    });
});