<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="GaragisteProjet._Default" %>
<%@ Register TagPrefix="asp" Namespace="AjaxControlToolkit" Assembly="AjaxControlToolkit, Version=4.5.7.1213, Culture=neutral, PublicKeyToken=28f01b0e84b6d53e" %>


<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
 
    <div class="row" data-ng-app="Garagiste_App" data-ng-controller="Ajout_Garagiste_Controller">
        <table class="nav-justified table-striped">
            <tr>
                <td>Nombre de garagistes:</td>
                <td>
                    <input ID="TextBoxNombreGaragistes" type="number" name="nombre" data-ng-model="item_Nombre" class="form-control" min="1" />
                </td>
                <td>
                    <select  name="franchise" data-ng-model="item_Franchise" class="form-control" data-ng-options="franchise.name for franchise in franchises"><option value="">choisir une franchise</option></select>

                </td>
                <td><button  ID="AjouterVoiture"  class="btn btn-primary"  data-ng-click="AddGaragiste()" onclick="return false;"><i class="fa fa-plus-square-o"></i>&nbsp;Ajouter</button></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
                <tr>
                    <td class="titre">ID</td>
                    <td class="titre">Nombre</td>
                    <td class="titre">Franchise</td>
                    <td></td>
                </tr>
               <tr data-ng-repeat="garagiste in garagistes">
                   <td>{{$index+1}}</td>
                   <td>{{garagiste.nombre}}</td>
                   <td>{{garagiste.franchise}}</td>
                   <td><button ng-click="deleteItem(garagistes, $index)"  class="btn btn-danger"><i class="fa fa-eraser"></i>&nbsp;Effacer</button></td>

               </tr>
        <tr>
                <td>Nombre de Voitures:</td>
                <td>
                    <input ID="TextBoxNombreVoiture" type="number" data-ng-model="nombreVoiture" class="form-control" min="1"/>
                </td>
                <td>
                    <select ID="TextBoxMarqueVoiture" class="form-control" data-ng-model="marqueVoiture" data-ng-options="voiture.name for voiture in models" ><option value="">choisir une marque</option></select>
                </td>
            <td><button class="btn btn-primary" ng-click="AddVoiture()" onclick="return false;"/><i class="fa fa-plus-square-o"></i>&nbsp;Ajouter</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td class="titre">ID</td>
                <td class="titre">Nombre</td>
                <td class="titre">Voiture</td>
                <td></td>
                
            </tr>
            <tr data-ng-repeat="item in voitures">
                <td>{{$index+1}}</td>
                <td>{{item.nombre}}</td>
                <td>{{item.voiture}}</td>
                <td><button ng-click="deleteItem(voitures, $index)" class="btn btn-danger" onclick="return false;"><i class="fa fa-eraser"></i>&nbsp;Effacer</button></td>
                
            </tr>
            <tr>
                <td>Date de début</td>
                <td>
                    <asp:TextBox type="text" ID="TextBoxDateDebut" data-ng-model="dateDebut"  CssClass="form-control" runat="server" />
                    <asp:CalendarExtender ID="CalendarExtenderDebut" runat="server" TargetControlID="TextBoxDateDebut" Format="dd/MM/yyyy"></asp:CalendarExtender>
                </td>
                <td>
                    <input  class="form-control" type="number" min="1" data-ng-model="duration" placeholder="duration" ></input>
                </td>
            </tr>
            <tr>
                <td></td>
                <td><asp:Button runat="server"  OnClientClick="return false;" CssClass="btn btn-success" Text="Lancer" ng-click="ExecuteLancer()" /></td>
                <td></td>
                <td></td>
            </tr>
            </table>
       
    </div>
</asp:Content>
