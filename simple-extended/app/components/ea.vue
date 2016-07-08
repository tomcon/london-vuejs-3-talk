<style  css-layer="basic">
   .ea-main-body table {
      border: 1px solid grey;
      padding: 10px;
      margin: 0 auto;
   }
</style>


<template id="ea-template" type="text/html">
   <div class="ea-main-body">
      <h1>CLUB: {{club}}</h1>
      <table>
         <tr>
            <td>EA Links</td>
            <td><a target=_blank href="https://livemyathletics.uka.org.uk/ManageMyClub/Secretaries/">Club Secretary portal <br>Mon-Fri(0800–1700), Tel: 0121 347 6543</a></td>
         </tr>
         <tr>
            <td>Power of 10</td>
            <td><a target=_blank href="http://www.thepowerof10.info/clubs/club.aspx?clubid=660&year=2015&firstclaimonly=n">HHH on Power of 10</a></td>
         </tr>
         <tr>
            <td>Run Britain</td>
            <td><a target=_blank href="http://www.runbritainrankings.com/">Main site</a></td>
         </tr>
      </table>  
   </div>
</template>


<script>
{
   /**
    * config object for a vue instance
    * @return {object} 
    *
    * module.exports = 
    */
   data : function() {
      return {
         club: 'Herne Hill'
      };
   }
}
</script>
