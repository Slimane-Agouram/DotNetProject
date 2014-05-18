<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="GaragisteProjet._Default" %>
<%@ Register TagPrefix="asp" Namespace="AjaxControlToolkit" Assembly="AjaxControlToolkit, Version=4.5.7.1213, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" %>


<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
   

    <div class="row">
        <table class="nav-justified">
            <tr>
                <td>Nombre de garagistes:</td>
                <td>
                    <asp:TextBox ID="TextBoxNombreGaragistes" runat="server" ></asp:TextBox>
                </td>
                <td>
                    <asp:TextBox ID="TextBoxMarque"  runat="server"></asp:TextBox>
                </td>
                <td><asp:Button runat="server" ID="AjouterVoiture" CssClass="btn btn-default" Text="Ajouter"/></td>
            </tr>
        <asp:GridView runat="server" ID="GridviewGaragiste"></asp:GridView>
        <tr>
                <td>Nombre de Voitures:</td>
                <td>
                    <asp:TextBox ID="TextBoxNombreVoiture" runat="server"></asp:TextBox>
                </td>
                <td>
                    <asp:TextBox ID="TextBoxMarqueVoiture" runat="server"></asp:TextBox>
                </td>
            <td><asp:Button runat="server" CssClass="btn btn-default" Text="Ajouter"/></td>
            </tr>
            <asp:GridView runat="server" ID="GridviewVoiture"></asp:GridView>

            <tr>
                <td>Date de début</td>
                <td>
                    <asp:TextBox ID="TextBoxDateDebut" runat="server"></asp:TextBox>
                    <asp:CalendarExtender ID="CalendarExtenderDebut" runat="server" TargetControlID="TextBoxDateDebut" Format="dd/MM/yyyy"></asp:CalendarExtender>
                </td>
                <td>
                    <asp:TextBox ID="TextBoxDuration" runat="server"></asp:TextBox>
                </td>
            </tr>
            </table>
       
    </div>
</asp:Content>
