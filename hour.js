function hourofday(time)
{
  if(time >= 0 && time <=6)
    {console.log("early morning")}

  else if(time >= 7 && time <= 12)
    {console.log("morning")}

  else if(time >= 13 && time <= 16)
    {console.log("afternoon")}

  else if(time >= 17 && time <= 20)
    {console.log("evening")}

  else if(time >= 21 && time <= 23)
    {console.log("Night")}

  else {console.log("no hour") }
}
let hourResult = hourofday(6)
