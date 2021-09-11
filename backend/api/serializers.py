from rest_framework import serializers
from .models import Tarea, Comentario


class ComentarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comentario
        fields = ['id', 'texto']


class TareaMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tarea
        fields = ['id', 'titulo', 'completado']


class TareaSerializer(TareaMiniSerializer):
    comentarios = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Tarea
        fields = ['id', 'titulo', 'completado', 'comentarios']

    def get_comentarios(self, obj):
        return ComentarioSerializer(obj.comentarios.all(), many=True).data
