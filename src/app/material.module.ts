import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material";

const materialModules = [
  MatToolbarModule
];

// Used for exporting all the used Material modules together through a single module

@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class MaterialModule { }
