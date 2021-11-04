type iTemplateLayoutRouteTypes = 'PUBLIC' | 'AUTHENTICATED'

interface iTemplateLayout extends iComponent {
  type: iTemplateLayoutRouteTypes
}

interface iUseTemplateLayoutHook {
  isAuthenticated: boolean
}