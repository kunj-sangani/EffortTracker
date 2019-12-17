define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Der opstod en fejl under indlæsning af fejlfindingsscriptet. Kontrollér, at serveren kører, og at URL-adressen for parameteren \"{0}\" er korrekt.",
      "errorLoadingDebugScriptHTTP": "Der opstod en fejl under indlæsning af fejlfindingsscriptet. Kontrollér, at serveren kører, at URL-adressen for parameteren \"{0}\" er korrekt, og at indlæsning af usikre scripts er tilladt. Overvej også at bruge et certifikat til udvikling og at betjene fejlfindingsscripts ved hjælp af HTTPS.",
      "errorLoadingDebugScriptMalformed": "Der opstod en fejl under indlæsning af fejlfindingsscriptet. URL-adressen ({0}) til fejlfinding er tilsyneladende forkert udformet.",
      "errorLoadingDebugScriptUnknown": "Ukendt fejl under indlæsning af fejlfindingsscriptet.",
      "errorLoadingDebugLoaderTitle": "Der opstod en fejl under indlæsning af fejlfindingsindlæseren.",
      "errorLoadingDebugManifestTitle": "Der opstod en fejl under indlæsning af fejlfindingsmanifester.",
      "errorLoadingUnknownTitle": "Der opstod en fejl under indlæsning af fejlfindingsscripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Komponent- eller initialiseringsfunktionen mangler.",
      "closeDeveloperToolsAriaLabel": "Luk udviklingsværktøjerne."
    },
    "_HyNcqqy05+791EWZRJ/Erg": {
      "listSeparator": ", ",
      "loadComponentError": "Failed to load component \"{0}\" ({1}). Original error: {2}",
      "loadComponentDependencyError": "Failed to load component dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadComponentDependencyFailoverPathError": "Failed to load component dependency \"{0}\" with failover path \"{1}\" from component \"{2}\" ({3}). Original error: {4}",
      "loadPathDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}). Original error: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Failed to load path dependency \"{0}\" from component \"{1}\" ({2}) due to another dependency that failed to load.",
      "loadEntryPointError": "Failed to load entry point from component \"{0}\" ({1}). Original error: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returned an empty object for component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returned an object with an empty default property for component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "The entry point for component \"{0}\" ({1}) has a dependency on \"{2}\" that is not declared in the manifest.",
      "loadScriptWithStringError": "loadScript function doesn't allow a string as 2nd parameter. Use ILoadScriptOptions instead.",
      "urlStatusLocalhostFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server. Make sure that you are running 'gulp serve'.",
      "urlStatusFileNotFoundError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The file was not found in the server.",
      "urlStatusForbiddenError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). The access to the file is forbidden.",
      "urlStatusClientErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was an error requesting the file.",
      "urlStatusServerErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a problem in the server.",
      "urlStatusLocalhostNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. Make sure that you are running 'gulp serve' and you have run 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem. This may be a problem with a HTTPS certificate. Make sure you have the right certificate.",
      "urlStatusNetworkErrorError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}). There was a network problem.",
      "urlStatusUndefinedError": "Failed to load URL '{3}' for resource '{2}' in component '{0}' ({1}) because of unknown problems.",
      "failedToCreateGlobalVariableError": "Failed to create global variable \"{0}\" from script \"{1}\"",
      "dependencyLoadError": "Failed to load module '{0}' because dependency {1} was not loaded",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}"
    },
    "_F4HRA/FKfb0X6JapWo2vTw": {
      "loadComponentLog": "Loading component \"{0}\" ({1}).",
      "loadComponentEndLog": "Component \"{0}\" ({1}) loaded.",
      "loadComponentRetryLog": "Loading component \"{0}\" ({1}). Attempt {2} of {3}.",
      "loadPathDependencyLog": "Loading path dependency \"{0}\" from component \"{1}\" ({2})",
      "isUndefinedValidateError": "The value for \"{0}\" must not be undefined"
    },
    "_fVUay/3ENa56/o3BfjRdrw": {
      "loadComponentMaxRetriesError": "Attempted to load component \"{0}\" ({1}) {2} times without success.",
      "manifestNotFoundError": "Manifest not found for component id \"{0}\" and version \"{1}\"."
    },
    "_ZZX3HYmO09A0dtXnoncSkA": {
      "tooManyComponentsError": "Too many components found for id \"{0}\".",
      "deleteComponentLog": "Deleting component \"{0}\" version \"{1}\" from the store.",
      "noComponentFoundError": "No component found for id \"{0}\".",
      "manifestNotFoundByIdError": "Manifest not found for component id \"{0}\".",
      "tooManyManifestsError": "{0} manifests (versions {1}) found for component \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} compatible versions ({1}) found for component \"{2}\" version \"{3}\"."
    },
    "_C14mR9Diz4DseFaa7aiq6A": {
      "browserNotSupportedError": "This version of your browser is not supported. Please update your browser to the latest version.",
      "loaderUserFriendlyError": "Programmet kan ikke indlæses på denne side. Brug knappen Tilbage i browseren til at prøve igen. Hvis problemet fortsætter, skal du kontakte administratoren af webstedet og give dem oplysninger i tekniske detaljer.",
      "invalidPreloadedDataError": "Invalid preloaded data."
    },
    "_a4wKXyUGuAbOcWmuhzMXpg": {
      "systemConfigDisabledError": "System.config() is not supported. Use a manifest to specify the configuration."
    },
    "_KuTfBwDffam4eyPQEJupWw": {
      "ie9OrOlderNotSupportedError": "This page does not support Internet Explorer releases older than version 10. Please update your web browser.",
      "firefox43OrOlderNotSupportedError": "This page does not support Mozilla Firefox releases older than version 44. Please update your web browser.",
      "platformFailedToLoadError": "Platform failed to load. Id: \"{0}\", name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platform failed to load. Id: \"{0}\", name: \"{1}\". Error: {2}",
      "applicationFailedToInitializeError": "Error initializing application. Error: {0}",
      "resourceNotFoundError": "Resource \"{0}\" not found in loader configuration of manifest for component \"{1}\" ({2}).",
      "noFailoverPathError": "Cannot call resolveAddress() on a component with no failover path"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Advarsel!",
      "warningLine1": "Brug af dette værktøj udsætter dig for potentielle sikkerhedsrisici, hvilket kan resultere i, at andre kan få adgang til dine personlige Office 365-data (dokumenter, mails, samtaler og meget mere). Kontrollér, at du har tillid til den person eller organisation, der har bedt dig tilgå dette værktøj, før du fortsætter.",
      "warningLine2": "Få mere at vide her: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Der opstod en fejl under indlæsning af fejlfindingsmanifester.",
      "debugManifestErrorDismissButtonText": "Afvis"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Vil du tillade fejlfindingsscripts?",
      "allowDebugLoaderTitle": "Tillad fejlfindingsindlæser?",
      "allowDebugLoaderAndManifestsTitle": "Tillad fejlfindingsindlæser og fejlfindingsscript?",
      "debugManifestLoadingWarning": "ADVARSEL! Denne side indeholder usikre scripts, som potentielt kan skade din computer, hvis du indlæser dem! Du bør ikke fortsætte, medmindre du har tillid til udvikleren og er klar over risiciene.",
      "debugManifestLoadingWarning2": "Hvis du er usikker, skal du klikke på {0}.",
      "debugManifestLoadingConfirm": "Indlæs fejlfindings-scripts",
      "debugManifestLoadingCancel": "Indlæs ikke fejlfindings-scripts",
      "debugManifestLoadingCalloutText": "Klik her, hvis du ikke ved, hvad du skal gøre."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Indlæser...",
      "developerToolsTabLoadingUnknownError": "Der opstod en ukendt fejl under indlæsning af modulet med udviklingsværktøjer."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Ydeevne",
      "ErrorAccessingPerfDataErrorMessage": "Ydeevnedataene kunne ikke hentes: objektet er null eller ikke defineret.",
      "ErrorAccessingRedirectDataErrorMessage": "Der opstod et problem under forsøget på at få adgang til ydeevnedataene for HTTP-omdirigeringen.",
      "ErrorParsingPercievedLatencyErrorMessage": "Der blev registreret en fejl under fortolkning af de beregnede ventetidsdata.",
      "ErrorParsingApiDataErrorMessage": "Der blev registreret en fejl under fortolkning af API-dataene.",
      "UnkownPerformanceDataErrorMessage": "Der opstod en ukendt fejl: {0}",
      "DefaultWebPartName": "Webdel",
      "ServerResponseLabel": "Serversvar",
      "ApplicationInitializationLabel": "Programinitialisering",
      "ScriptFetchEvalLabel": "Evaluering og hentning af script",
      "SpLoaderStartLabel": "Initialisering af SPFx",
      "PageRenderLabel": "Sidegengivelse",
      "LeftNavRenderLabel": "Gengivelse af venstre navigation",
      "CanvasRenderLabel": "Gengivelse af lærred",
      "LayoutRenderLabel": "Layoutgengivelse",
      "RedirectResponseLabel": "Omdiriger svar",
      "AppLoadLabel": "Programindlæsning",
      "RenderWebPartsLabel": "Gengiv webdele",
      "TotalRenderTimeLabel": "I alt",
      "GeneralErrorMessage": "Der opstod en fejl under hentning af ydeevnedataene.",
      "ErrorMessagePrefix": "Fejlmeddelelse: {0}",
      "PerformanceDataHint": "Bemærk! Når du tilføjer eller fjerner en webdel, skal du opdatere siden for at få vist opdaterede ydeevnedata.",
      "ModulesLoadedLegendLabel": "Indlæste moduler",
      "InitializationLegendLabel": "Initialisering",
      "RenderTimeLegendLabel": "Gengivelsestid",
      "InitializationTimeLabel": "Initialiseringstid",
      "ModuleLoadingTimeLabel": "Indlæsningstid for modul",
      "ModuleLazyLoadingDelayLabel": "Forsinket indlæsning af modul",
      "DataFetchTimeLabel": "Datahentningstid",
      "DataFetchLegendLabel": "Hentning af data",
      "ItemsColumnHeader": "Elementer",
      "DurationColumnHeader": "Varighed",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ikke tilgængelig"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifester",
      "noManifestSelected": "Der er ikke valgt et manifest"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sporing",
      "EmptyTraceData": "Der er ikke indlæst nogen spor.",
      "ExportCSVButtonLabel": "Eksportér CSV-fil",
      "LevelHeaderLabel": "Niveau",
      "MessageHeaderLabel": "Meddelelse",
      "ScopeHeaderLabel": "Omfang",
      "SourceHeaderLabel": "Kilde",
      "TimestampHeaderLabel": "Tidsstempel",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});