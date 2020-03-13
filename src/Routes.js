import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { NormalFetchData } from "./modules/NormalFetchData";
import { NormalFetchError } from "./modules/NormalFetchError";
import { NormalFetchRaceCondition } from "./modules/NormalFetchRaceCondition";
import { NormalFetchList } from "./modules/NormalFetchList";

import { SuspenseFetchData } from "./modules/SuspenseFetchData";
import { SuspenseFetchError } from "./modules/SuspenseFetchError";
import { SuspenseFetchRaceCondition } from "./modules/SuspenseFetchRaceCondition";
import { SuspenseFetchList } from "./modules/SuspenseFetchList";

export const Routes = () => (
  <Switch>
    <Redirect exact={true} from="/" to="/normal-fetch-data" />
    <Route path="/normal-fetch-data">
      <NormalFetchData />
    </Route>
    <Route path="/normal-fetch-error">
      <NormalFetchError />
    </Route>
    <Route path="/normal-fetch-race-condition">
      <NormalFetchRaceCondition />
    </Route>
    <Route path="/normal-fetch-list">
      <NormalFetchList />
    </Route>
    <Route path="/suspense-fetch-data">
      <SuspenseFetchData />
    </Route>
    <Route path="/suspense-fetch-error">
      <SuspenseFetchError />
    </Route>
    <Route path="/suspense-fetch-race-condition">
      <SuspenseFetchRaceCondition />
    </Route>
    <Route path="/suspense-fetch-list">
      <SuspenseFetchList />
    </Route>
  </Switch>
);
