<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="TestApi.aspx.cs" Inherits="GaragisteProjet.TestApi" %>


<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
        <script src="/Scripts/jquery-1.10.2.js" type="text/javascript"></script>
     <script type="text/javascript">
         function getProducts() {
             $.getJSON("api/Product",
                 function (data) {
                     $('#products').empty(); // Clear the table body.

                     // Loop through the list of products.
                     $.each(data, function (key, val) {
                         // Add a table row for the product.
                         var row = '<td>' + val.Name + '</td><td>' + val.Price + '</td>';
                         $('<tr/>', { text: row })  // Append the name.
                             .appendTo($('#products'));
                     });
                 });
         };

         $(document).ready(getProducts);
</script>
    <h2>Products</h2>
    <table>
    <thead>
        <tr><th>Name</th><th>Price</th></tr>
    </thead>
    <tbody id="products">
    </tbody>
    </table>
   
</asp:Content>
