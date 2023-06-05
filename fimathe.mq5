input double line1 = 0; 
input double line2 = 0; 


double firstLine =  line1;
double secondLine = line2; 
double channel_size = NormalizeDouble(MathAbs(line1 - line2), 2); 

void OnTick()
  {
bool isUpTrend = firstLine > secondLine; 
double zone_neutra_line = isUpTrend ? NormalizeDouble(secondLine - channel_size, 2) : NormalizeDouble(secondLine + channel_size,2);
double next_reference_line = isUpTrend ? NormalizeDouble(firstLine + channel_size,2) : NormalizeDouble(firstLine - channel_size,2); 
Print(isUpTrend ? "compra" : "venda");
  
   
   double last_candle_close_price = GetLastClosePrice();
   Print(last_candle_close_price, "last candle");
   
   if(isUpTrend) {
      
      // following tred
     if(last_candle_close_price > firstLine) {
        secondLine = firstLine;
        firstLine = next_reference_line;
     }
     
     // reversing trend
     if(last_candle_close_price < zone_neutra_line) {
       firstLine = zone_neutra_line;
           Print("trigging1");
     }
   
   } else {
       
       // following tred
       if(last_candle_close_price < firstLine) {
        secondLine = firstLine;
        firstLine = next_reference_line;
     }
     
     // reversing trend
     if(last_candle_close_price > zone_neutra_line) {
       firstLine = zone_neutra_line;
        Print("trigging2");
     }
   }
   
   
   Print(firstLine, "first");
   Print(secondLine, "second");
   Print(zone_neutra_line, "zone");
 }



double GetLastClosePrice () {
   MqlRates princeInfo[];
   ArraySetAsSeries(princeInfo,true);
   int price_data = CopyRates(_Symbol,_Period,1,1,princeInfo); // depending on what time frame, you have to specify, time frames have different close times
   return princeInfo[0].close;
}

