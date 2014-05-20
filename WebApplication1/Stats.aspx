<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Stats.aspx.cs" Inherits="GaragisteProjet.Stats" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <div data-ng-app="Stats_App" data-ng-controller="Stats_Controller" data-ng-init="reLoop()">
    		<div data-ac-chart="chartType" data-ac-data="data" data-ac-config="config" id='chart' class='chart'></div>
        <button ng-click="recieveData()" onclick="return false;">recieve</button>
        </div>


</asp:Content>
