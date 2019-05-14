/* Adapted by: Vadim Lasto, lasto.com */

   var textarea;
   var content;

function edToolbar(obj) {
   des=new Array(
      "Перенос строки","Параграф","Цитата","Заголовок 1",
      "Заголовок 2","Жирный шрифт","Курсив","Нижнее подчёркивание",
      "По левому краю","По центру","По правому краю","Нумерованный список",
      "Ненумерованный список","Вставить таблицу","Добавить ссылку","Добавить картинку"
   );
   nam=new Array(
      "btnBreak","btnBreak","btnBreak","btnH1",
      "btnH2","btnBold","btnItalic","btnUnderline",
      "btnLeft","btnCenter","btnRight","btnList",
      "btnList","btnTable","btnLink","btnPicture"
   );
   stt=new Array(
      "<br>","<p>","<blockquote>","<h1>",
      "<h2>","<b>","<i>","<u>",
      "<p align=left>","<center>","<p align=right>","<ol>",
      "<ul>","<table border=1 cellpadding=2 cellspacing=0 width=100% align=center><tr><td>Ваш текст","",""
   );
   end=new Array(
      "","</p>","</blockquote>","</h1>",
      "</h2>","</b>","</i>","</u>",
      "</p>","</center>","</p>","</ol>",
      "</ul>","</td></tr></table>","",""
   );
   img=new Array("R0lGODlhFwAWALMAAIiIiK6urtDQ0Pb29omJibCwsNHR0f////j4+LW1tdDQ0P39/YmJibe3t9HR0f///yH5BAAAAAAALAAAAAAXABYAAwRV8MlJq33gnc2790j2jWOokehmpun6AXAMg6Inb0BZc3J++LQT7/bTCXFEYMfVSRpHMdyT5FNymC/pB2vTBlHVKdS73LG25nP5qL5mEPC4fE7v2e/2CAA7","R0lGODlhFwAWAPcAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///3V1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dSH5BAAAAAAALAAAAAAXABYABwhxAB8IHEiwoMEHAB4cWMiwoUOHCBI+nDgxokKKGBdazJhxI0eKHhsCGEkSQEWJDkuWfBiS4UiRJiGihElT5kWYKmM2bLkwp86dM13+BBm059CTN4V+5HngJUemHzUWjSo1KdWqV20i2Mq1q9evPsOKDQgAOw==","R0lGODlhFwAWAPcAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///xYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFiwAAAAAFwAWAAAIYgAPCBxIsKDBAwAOKjSIIOHChwcaEgRA0SFEiQMpQiSIUaDFjRE/guQocmLFkxY7jiRpEqXLlCVXqnz5cqDKlQJn0lR4E2dPiDBxaswZ8+BJm0VB/hwpEYHTp1CjSqVJ9WVAADs=","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRX8MlJq33gnc2790j2jWOokehmpul6AB/MyZxLzxugg+Ibd7eD7Yfr2HTIXbHWC/qWqiYxxzs5b8GhB1ulboFdFskl/pDLxh46fVozH4i4fE6vJ+/4vC4CADs=","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRU8MlJq33gnc2790j2jWOokehmpul6AB+8AXTnyp2M43c8czzRy+cJnmhIZNEmxAFzoCZxGD0SnZzeklr9bZNGFsol/pDLzBM6va4i3vC4fA6u2+sRADs=","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRR8MlJq33gnc2790j2jWOokehmpunKkm4HzDRQil5dfzE3yzYQDkgUnoC629GnCxo/PyZvKK12eptm9ErNNpUvWDesGpOx5IMJwW6733CtfB4BADs=","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRM8MlJq33gnc2790j2jWOokehmpgcAlGLqwidL2+Q6uvNN9r7dKxf7AIOe40eXHKKYHeWyuOHxnlQcB6pVZbtccAZBLpvPaKt6zXZFAAA7","R0lGODlhFwAWALMAAIiIiK6urtDQ0Pb29omJibCwsNHR0f////j4+LW1tdDQ0P39/YmJibe3t9HR0f///yH5BAAAAAAALAAAAAAXABYAAwRa8MlJq33gnc2790j2jWOokehmpunKkm4HzMBB110s4zbP6ZxZ0KcSfYQbZM7oUSp/zN3wA0zynsVTE4A4hIje6I5WEr+g2uGNvEyf0W+q+W1C2O/4vH7N7/MjADs=","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRK8MlJq33gnc2790j2jWOokehmpum6AXAsy5zLluI70599g7nDbgioBX8dGxGGOyGTweXM6HyqosumFVq1+rxH8ANBLpvPaKk6FgEAOw==","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRL8MlJq33gnc2790j2jWOokehmpum6AXAsy5zLlmI3z2B+f7adEFDz/Tq215CINB5VviUPenoWq8phD2tNdp1PbziDKJvP6LR0HYsAADs=","R0lGODlhFwAWALMAAIiIiK6urtDQ0Pb29omJibCwsNHR0f////j4+LW1tdDQ0P39/YmJibe3t9HR0f///yH5BAAAAAAALAAAAAAXABYAAwRK8MlJq33gnc2790j2jWOokehmpum6AXAsy5zLluI3z3V+f7adENA7/UC+zhBWPAJ9S54q6TzYlMtmVbu1Up3XqglBLpvP6Kg6FgEAOw==","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRS8MlJq33gnc2790j2jWOokehmdkQKihvRbkBt29zKza4KHzKeS9f7EGVF32lHu91yP2DycEQWiVPlztrD8pxPLStZnWKzZ3MGwW6733CwfG6LAAA7","R0lGODlhFwAWALMAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///yH5BAAAAAAALAAAAAAXABYAAwRQ8MlJq33gnc2790j2jWOokehmckSbduvWEhtg3zcXH/Ori74SMAga9oK7I275O/FcyCGxOS06j74kdImjyqBZaXVXPZDHGYR6zW67ufD4LQIAOw==","R0lGODlhFwAWAPcAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///3V1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dSH5BAAAAAAALAAAAAAXABYABwiGAB8IHEiwoMEHAB4cWMiwoUOHCBI+nDgxokKKGBdanAigo8ePADRKfAiypMiLDkuCPNmQwMKQDGG+ZLmQgMsDMnE2hLnxgM2fOYPS9HlTaMyhPl+q9Ij0qNOZB3qm3Ek16sipT3VaRVkVKlSpO5d2bJoR4tWyD8GibWgRgdu3cOPKFUsXZEAAOw==","R0lGODlhFwAWALMAAIiIiK6urtDQ0Pb29omJibCwsNHR0f////j4+LW1tdDQ0P39/YmJibe3t9HR0f///yH5BAAAAAAALAAAAAAXABYAAwSM8MlJq33gnc2790j2jWOodUiqkoeJIgYnAKS7IZom7HMptgiGhkFk7BAfW5BD2Bl7oN+SJyAYmrToKcg4UAXELEpafO4MDDFHSShSGQSklgMoAu4AAl5t2+RpOSIaYn1+B3uIhzc/dBghdCZZhYqIe4otjHQHgTmXmCcelpZrmSw+Dyqpqqsqla6veBEAOw==","R0lGODlhFwAWAPcAAImJibCwsNDQ0Pb29ouLi7GxsdHR0f////j4+Le3t9DQ0P39/YuLi7m5udHR0f///3V1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dXV1dSH5BAAAAAAALAAAAAAXABYABwilAB8IHEiwoMEHAB4cWMiwoUOHCBIyBECxokWLDCMqXJjwIEEAGSVyPJigZAKEITce6FjQ5EmQCzVOJGkSZUyRKwkK2CngY8qZA3n2HAjzgMyRDJIK9XlTZcKkDDwWPZoTqtSfIwVaRIix6cSKBxQiFLsS68SVF8HCpDoSQMSJGtfi5Ig2LUi5Ks+Klahw6tyvFOsWNfr3oeGmCBIrXsy4sd3HkAMCADs=");

   content="<div class=\"toolbar\">";
   for(n in img) {
      action="doAddTags(\'"+stt[n]+"\',\'"+end[n]+"\',\'"+obj+"\')";
      if (nam[n]=="btnList") action="doList(\'"+stt[n]+"\',\'"+end[n]+"\',\'"+obj+"\')";
      if (nam[n]=="btnLink") action="doURL(\'"+obj+"\')";
      if (nam[n]=="btnPicture") action="doImage(\'"+obj+"\')";
      content+="<img alt=\""+des[n]+"\" title=\""+des[n]+"\" class=\"button\" src=\"data:image/gif;base64,"+img[n]+"\" name=\""+nam[n]+"\" onClick=\""+action+"\">";
   }
   content+="</div>";
}

/* functions from: Javascript Textarea BBCode Markup Editor, Version: 1.3, Author Balakrishnan */

function doImage(obj) {
   textarea=document.getElementById(obj);
   var url=prompt("Enter the Image URL:","#");
   var scrollTop=textarea.scrollTop;
   var scrollLeft=textarea.scrollLeft;
   if (url!="" && url!=null) {
      if (document.selection) {
         textarea.focus();
         var sel=document.selection.createRange();
         sel.text="<img src=\""+url+"\">";
      } else {
         var len=textarea.value.length;
         var start=textarea.selectionStart;
         var end=textarea.selectionEnd;
         var sel=textarea.value.substring(start,end);
         var rep="<img src=\""+url+"\">";
         textarea.value=textarea.value.substring(0,start)+rep+textarea.value.substring(end,len);
         textarea.scrollTop=scrollTop;
         textarea.scrollLeft=scrollLeft;
      }
   }
}

function doURL(obj) {
   textarea=document.getElementById(obj);
   var url=prompt("Enter the URL:","#");
   var scrollTop=textarea.scrollTop;
   var scrollLeft=textarea.scrollLeft;
   if (url!="" && url!=null) {
      if (document.selection) {
         textarea.focus();
         var sel=document.selection.createRange();
         if (sel.text=="") sel.text="<a target=\"_blank\" href=\""+ url +"\">Link</a>";
         else sel.text ="<a target=\"_blank\" href=\""+url+"\">"+sel.text+"</a>";
      } else {
         var len=textarea.value.length;
         var start=textarea.selectionStart;
         var end=textarea.selectionEnd;
         var sel=textarea.value.substring(start,end);
         if(sel=="") var rep="<a target=\"_blank\" href=\""+ url +"\">Link</a>";
         else var rep="<a target=\"_blank\" href=\""+url+"\">"+sel+"</a>";
         textarea.value=textarea.value.substring(0,start)+rep+textarea.value.substring(end,len);
         textarea.scrollTop=scrollTop;
         textarea.scrollLeft=scrollLeft;
      }
   }
}

function doAddTags(tag1,tag2,obj) {
   textarea=document.getElementById(obj);
	if (document.selection) {
      textarea.focus();
      var sel=document.selection.createRange();
      sel.text=tag1+sel.text+tag2;
   } else {
      var len=textarea.value.length;
      var start=textarea.selectionStart;
      var end=textarea.selectionEnd;
      var scrollTop=textarea.scrollTop;
      var scrollLeft=textarea.scrollLeft;
      var sel=textarea.value.substring(start,end);
      var rep=tag1+sel+tag2;
      textarea.value=textarea.value.substring(0,start)+rep+textarea.value.substring(end,len);
      textarea.scrollTop=scrollTop;
      textarea.scrollLeft=scrollLeft;
   }
}

function doList(tag1,tag2,obj) {
   textarea=document.getElementById(obj);
   if (document.selection) {
      textarea.focus();
      var sel=document.selection.createRange();
      var list=sel.text.split("\n");
      for (i=0; i < list.length; i++) {
         list[i]="<li>"+list[i]+"</li>";
      }
      sel.text=tag1+"\n"+list.join("\n")+"\n"+tag2;
   } else {
      var len=textarea.value.length;
      var start=textarea.selectionStart;
      var end=textarea.selectionEnd;
      var i;
      var scrollTop=textarea.scrollTop;
      var scrollLeft=textarea.scrollLeft;
      var sel=textarea.value.substring(start,end);
      var list=sel.split("\n");
      for (i=0; i < list.length; i++) {
         list[i]="<li>"+list[i]+"</li>";
      }
      var rep=tag1+"\n"+list.join("\n")+"\n"+tag2;
      textarea.value=textarea.value.substring(0,start)+rep+textarea.value.substring(end,len);
      textarea.scrollTop=scrollTop;
      textarea.scrollLeft=scrollLeft;
   }
}
   edToolbar("text");
   