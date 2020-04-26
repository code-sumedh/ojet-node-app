/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/**
 * @license
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
define([],(function(){var n=["off","polite","assertive"];return self.announce=function(e,t){null!=t&&n.includes(t)||(t="polite");var o={bubbles:!0,detail:{message:e,manner:t}};document.getElementById("globalBody").dispatchEvent(new CustomEvent("announce",o))},{announce:announce}}));