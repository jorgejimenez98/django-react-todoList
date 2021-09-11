from django.db import models


class Tarea(models.Model):
    titulo = models.CharField(max_length=218)
    completado = models.BooleanField(default=False)

    def __str__(self):
        return '{} {}'.format(self.id, self.titulo)


class Comentario(models.Model):
    tarea = models.ForeignKey(Tarea, on_delete=models.CASCADE, related_name='comentarios')
    texto = models.TextField()

    def __str__(self):
        return 'Comentario: {}'.format(self.texto)
