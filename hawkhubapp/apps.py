from django.apps import AppConfig


class HawkhubappConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "hawkhubapp"

    def ready(self):
        import hawkhubapp.signals #added