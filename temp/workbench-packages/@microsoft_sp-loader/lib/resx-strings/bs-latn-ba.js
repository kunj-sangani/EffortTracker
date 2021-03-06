define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Greška pri učitavanju skripte za ispravljanje grešaka. Provjerite je li server pokrenut i je li parametar URL veze \"{0}\" tačan.",
      "errorLoadingDebugScriptHTTP": "Greška pri učitavanju skripte za ispravljanje grešaka. Provjerite je li server pokrenut, je li parametar URL veze \"{0}\" tačan te je li dopušteno učitavanje nesigurnih skripti. Također razmotrite korištenje razvojnog certifikata i opsluživanje skripti za ispravljanje grešaka koristeći HTTPS.",
      "errorLoadingDebugScriptMalformed": "Greška pri učitavanju skripte za ispravljanje grešaka. URL veze za otklanjanje grešaka ({0}) se čini pogrešno formiranim.",
      "errorLoadingDebugScriptUnknown": "Pojavila se nepoznata greška prilikom učitavanja skripte za ispravljanje grešaka",
      "errorLoadingDebugLoaderTitle": "Greška pri učitavanju programa za ispravljanje grešaka.",
      "errorLoadingDebugManifestTitle": "Greška pri učitavanju manifesta za uklanjanje grešaka.",
      "errorLoadingUnknownTitle": "Greška pri učitavanju skripti za ispravljanje grešaka."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Nedostaje komponenta ili funkcija programa za inicijaliziranje.",
      "closeDeveloperToolsAriaLabel": "Zatvorite alate za razvojne inženjere."
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
      "loaderUserFriendlyError": "Nije moguće učitati aplikaciju na ovoj stranici. Koristite dugme Nazad u pregledniku da biste pokušali opet. Ako ponovo dođe do problema, obratite se administratoru lokacije i dajte mu informacije u okviru Tehnički detalji.",
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
      "warningHeading": "Upozorenje!",
      "warningLine1": "Korištenjem ovog alata izlažete se potencijalnim sigurnosnim prijetnjama koje mogu dovesti do toga da druge osobe steknu pristup vašim ličnim Office 365 podacima (dokumenti, poruke e-pošte, razgovori i drugi sadržaji). Prije nego što nastavite, provjerite je li osoba ili organizacija koja je od vas tražila pristup ovom alatu pouzdana.",
      "warningLine2": "Saznajte više ovdje: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Pojavila se greška prilikom učitavanja manifesta za otklanjanje grešaka.",
      "debugManifestErrorDismissButtonText": "Odbaci"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Dopustiti skripte za ispravljanje grešaka?",
      "allowDebugLoaderTitle": "Želite dopustiti alat za učitavanje ispravaka grešaka?",
      "allowDebugLoaderAndManifestsTitle": "Želite li dopustiti alat za učitavanje ispravaka grešaka i skripte za ispravljanje grešaka?",
      "debugManifestLoadingWarning": "UPOZORENJE: ova stranica sadrži nesigurne skripte čijim učitavanjem se može oštetiti računar. Nemojte nastaviti ako smatrate da programer nije pouzdan i ako ne razumijete opasnosti.",
      "debugManifestLoadingWarning2": "Ako niste sigurni, kliknite {0}.",
      "debugManifestLoadingConfirm": "Učitaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCancel": "Ne učitavaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCalloutText": "Ako ne znate šta uraditi, kliknite ovdje."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Učitavanje...",
      "developerToolsTabLoadingUnknownError": "Nepoznata greška prilikom učitavanja modula alata za razvojne inženjere."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanse",
      "ErrorAccessingPerfDataErrorMessage": "Nije moguće preuzeti podatke o performansama: objekt je bez vrijednosti ili nedefiniran.",
      "ErrorAccessingRedirectDataErrorMessage": "Došlo je do problema prilikom pristupa podacima o performansama HTTP preusmjeravanja.",
      "ErrorParsingPercievedLatencyErrorMessage": "Otkrivena je greška prilikom raščlanjivanja podataka o prepoznatom kašnjenju.",
      "ErrorParsingApiDataErrorMessage": "Otkrivena je greška prilikom raščlanjivanja API podataka.",
      "UnkownPerformanceDataErrorMessage": "Došlo je do nepoznate greške: {0}",
      "DefaultWebPartName": "Web dio",
      "ServerResponseLabel": "Odziv servera",
      "ApplicationInitializationLabel": "Pokretanje aplikacije",
      "ScriptFetchEvalLabel": "Preuzimanje i procjena skripte",
      "SpLoaderStartLabel": "SPFx inicijalizacija",
      "PageRenderLabel": "Vizuelizacija stranice",
      "LeftNavRenderLabel": "Vizuelizacija lijevog okna za navigaciju",
      "CanvasRenderLabel": "Vizuelizacija platna",
      "LayoutRenderLabel": "Pregled rasporeda",
      "RedirectResponseLabel": "Odgovor o preusmjeravanju",
      "AppLoadLabel": "Učitavanje aplikacije",
      "RenderWebPartsLabel": "Vizuelizacija web dijelova",
      "TotalRenderTimeLabel": "Ukupno",
      "GeneralErrorMessage": "Žao nam je, došlo je do greške prilikom preuzimanja podataka o performansama.",
      "ErrorMessagePrefix": "Poruka o grešci: {0}",
      "PerformanceDataHint": "Napomena: Kada dodate ili uklonite web dio, osvježite stranicu da biste vidjeli ažurirane podatke o performansama.",
      "ModulesLoadedLegendLabel": "Učitani moduli",
      "InitializationLegendLabel": "Pokretanje",
      "RenderTimeLegendLabel": "Vrijeme vizuelizacije",
      "InitializationTimeLabel": "Vrijeme pokretanja",
      "ModuleLoadingTimeLabel": "Vrijeme učitavanja modula",
      "ModuleLazyLoadingDelayLabel": "Modul učitavanja odgođen",
      "DataFetchTimeLabel": "Vrijeme dobavljanja podataka",
      "DataFetchLegendLabel": "Dobavljanje podataka",
      "ItemsColumnHeader": "Stavke",
      "DurationColumnHeader": "Trajanje",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ne postoji"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nije odabran manifest"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Praćenje",
      "EmptyTraceData": "Nema učitanih praćenja.",
      "ExportCSVButtonLabel": "Izvezi CSV",
      "LevelHeaderLabel": "Nivo",
      "MessageHeaderLabel": "Poruka",
      "ScopeHeaderLabel": "Opseg",
      "SourceHeaderLabel": "Izvor",
      "TimestampHeaderLabel": "Vremenska oznaka",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});