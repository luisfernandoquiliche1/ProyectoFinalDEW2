import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import {CoreComponent} from "./app/core.component";

bootstrapApplication(CoreComponent, appConfig)
  .catch((err) => console.error(err));
