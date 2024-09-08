import { bootstrapApplication } from '@angular/platform-browser';
import {CoreComponent} from "./app/core.component";
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(CoreComponent, config);

export default bootstrap;
