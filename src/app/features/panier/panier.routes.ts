import { Routes } from "@angular/router";
import { PanierContainerComponent } from "./panier-container/panier-container.component";

export const PANIER_ROUTES: Routes = [
  { path: "", redirectTo: "cocktails", pathMatch: "full" },
  { path: "panier", component: PanierContainerComponent }
];
