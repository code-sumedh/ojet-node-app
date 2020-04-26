/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
define(["accUtils"],(function(n){return function(){this.connected=function(){n.announce("Customers page loaded.","assertive"),document.title="Customers"},this.disconnected=function(){},this.transitionCompleted=function(){}}}));