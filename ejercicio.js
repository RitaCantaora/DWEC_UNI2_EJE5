function iniciaDatos(){
   
    resultados[0]=["","Ayuntamiento","Polideportivo","Instituto","Mercado","Colegio"];
   
    for(var i=1;i<resultados.length;i++){
         resultados[i]=new Array(NUMERO_SEDES+1);
     }
     resultados[1][0]="PV";
     resultados[2][0]="OV";
     resultados[3][0]="VpSI";
     resultados[4][0]="UPV";
    
     for(var i=0;i=resultados.length ;i++){
         for(var j=1 ;j=NUMERO_SEDES.length;j++)
             resultados[i][j]=generaAleatorioMinMax(5,10);
     }  
     console.table(resultados);
     mostrarVotosPorPartido();
     mostrarVotosPorSede();
     mostrarOrdenados();
}
