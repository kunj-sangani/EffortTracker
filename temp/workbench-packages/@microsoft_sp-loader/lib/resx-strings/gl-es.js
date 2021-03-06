define([], function() {
  var strings = {
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Erro ao cargar o script de depuración. Asegúrate de que o servidor se está executando e que o URL do parámetro \"{0}\" é correcto.",
      "errorLoadingDebugScriptHTTP": "Erro ao cargar o script de depuración. Asegúrate de que o servidor se está executando, que o URL do parámetro \"{0}\" é correcto e que se permite a carga de scripts non seguros. Considera tamén usar un certificado de desenvolvemento e fornecer scripts de depuración a través de HTTPS.",
      "errorLoadingDebugScriptMalformed": "Erro ao cargar o script de depuración. O URL de depuración ({0}) parece que non está ben formado.",
      "errorLoadingDebugScriptUnknown": "Erro descoñecido ao cargar un script de depuración.",
      "errorLoadingDebugLoaderTitle": "Erro ao cargar o cargador de depuración.",
      "errorLoadingDebugManifestTitle": "Erro ao cargar manifestos de depuración.",
      "errorLoadingUnknownTitle": "Erro ao cargar os scripts de depuración."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Falta un compoñente ou unha función do inicializador.",
      "closeDeveloperToolsAriaLabel": "Pecha as ferramentas de programador."
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
      "loaderUserFriendlyError": "Non se pode cargar a aplicación nesta páxina. Usa o botón Atrás do explorador para tentalo de novo. Se o problema continúa, ponte en contacto co administrador do sitio e fornécelle a información que aparece nos detalles técnicos.",
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
      "warningHeading": "Aviso",
      "warningLine1": "O uso desta ferramenta exponte a ameazas de seguranza potenciais, que poden ter como resultado que outros usuarios obteñan acceso aos teus datos persoais de Office 365 (documentos, correos electrónicos, conversas e máis). Asegúrate de confiar na persoa ou organización que che solicitou que accedeses a esta ferramenta antes de continuar.",
      "warningLine2": "Obtén máis información aquí: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Produciuse un erro ao cargar o manifesto de depuración.",
      "debugManifestErrorDismissButtonText": "Rexeitar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Queres permitir a depuración de scripts?",
      "allowDebugLoaderTitle": "Permitir cargador de depuración?",
      "allowDebugLoaderAndManifestsTitle": "Permitir o cargador ou os scripts de depuración?",
      "debugManifestLoadingWarning": "ADVERTENCIA: esta páxina contén scripts que non son seguros. Se a cargas, podería danar o teu computador. Non continúes a menos que confíes no programador e comprendas os riscos.",
      "debugManifestLoadingWarning2": "Se non estás seguro, preme {0}.",
      "debugManifestLoadingConfirm": "Cargar scripts de depuración",
      "debugManifestLoadingCancel": "Non cargar os scripts de depuración",
      "debugManifestLoadingCalloutText": "Se non sabes que facer, preme aquí."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Cargando...",
      "developerToolsTabLoadingUnknownError": "Erro descoñecido ao cargar o módulo de ferramentas de programador."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Desempeño",
      "ErrorAccessingPerfDataErrorMessage": "Non se poden recuperar os datos de desempeño: o obxecto é nulo ou non está definido.",
      "ErrorAccessingRedirectDataErrorMessage": "Produciuse un problema ao acceder aos datos de desempeño de redireccionamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Produciuse un erro ao analizar os datos da latencia percibidos.",
      "ErrorParsingApiDataErrorMessage": "Produciuse un erro ao analizar os datos da API.",
      "UnkownPerformanceDataErrorMessage": "Produciuse un erro descoñecido: {0}",
      "DefaultWebPartName": "Peza web",
      "ServerResponseLabel": "Resposta do servidor",
      "ApplicationInitializationLabel": "Inicialización da aplicación",
      "ScriptFetchEvalLabel": "Avaliación e obtención do script",
      "SpLoaderStartLabel": "Inicialización de SPFx",
      "PageRenderLabel": "Procesamento de páxina",
      "LeftNavRenderLabel": "Representación do navegador esquerdo",
      "CanvasRenderLabel": "Representación do lenzo",
      "LayoutRenderLabel": "Representación do deseño",
      "RedirectResponseLabel": "Redirixir resposta",
      "AppLoadLabel": "Carga da aplicación",
      "RenderWebPartsLabel": "Representación de pezas web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Produciuse un erro ao recuperar os datos de desempeño.",
      "ErrorMessagePrefix": "Mensaxe de erro: {0}",
      "PerformanceDataHint": "Nota: despois de engadir ou eliminar unha peza web, actualiza a páxina para ver os datos de desempeño actualizados.",
      "ModulesLoadedLegendLabel": "Módulos cargados",
      "InitializationLegendLabel": "Inicialización",
      "RenderTimeLegendLabel": "Tempo de procesamento",
      "InitializationTimeLabel": "Hora de inicialización",
      "ModuleLoadingTimeLabel": "Hora de carga do módulo",
      "ModuleLazyLoadingDelayLabel": "Carga do módulo retrasada",
      "DataFetchTimeLabel": "Hora da obtención de datos",
      "DataFetchLegendLabel": "Obtención de datos",
      "ItemsColumnHeader": "Elementos",
      "DurationColumnHeader": "Duración",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestos",
      "noManifestSelected": "Non se seleccionou ningún manifesto"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Rastrexar",
      "EmptyTraceData": "Non se cargaron seguimentos.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nivel",
      "MessageHeaderLabel": "Mensaxe",
      "ScopeHeaderLabel": "Ámbito",
      "SourceHeaderLabel": "Orixe",
      "TimestampHeaderLabel": "Marca de hora",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}"
    }
  };

  strings.default = strings;
  return strings;
});