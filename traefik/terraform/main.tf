resource "kubernetes_manifest" "customresourcedefinition_cephrbdmirrors_ceph_rook_io" {
  manifest = {
    apiVersion = "apiextensions.k8s.io/v1"
    kind       = "CustomResourceDefinition"
    metadata   = {
      annotations = {
        "controller-gen.kubebuilder.io/version" = "v0.6.2"
      }
      name = "ingressroutes.traefik.containo.us"
    }
    spec = {
      group = "traefik.containo.us"
      names = {
        kind = "IngressRoute"
        listKind = "IngressRouteList"
        plural = "ingressroutes"
        singular = "ingressroute"
      }
      scope = "Namespaced"
    }
  }
}