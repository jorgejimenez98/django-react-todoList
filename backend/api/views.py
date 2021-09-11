from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TareaMiniSerializer, Tarea, TareaSerializer, Comentario


@api_view(['GET'])
def obtenerTareas(request):
    tareas = Tarea.objects.all()
    serializer = TareaMiniSerializer(tareas, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def insertarTarea(request):
    titulo = request.data.get('titulo')
    model = Tarea.objects.create(titulo=titulo)
    serializer = TareaMiniSerializer(model, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def eliminarTarea(request, pk):
    todo = Tarea.objects.get(pk=pk)
    todoId = todo.id
    todo.delete()
    return Response({"id": todoId}, status=status.HTTP_200_OK)


@api_view(['PUT'])
def completarTarea(request, pk):
    todo = Tarea.objects.get(pk=pk)
    todo.completado = not todo.completado
    todo.save()
    serializer = TareaMiniSerializer(todo, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['PUT'])
def eliminarCompletados(request):
    for todo in Tarea.objects.all():
        if todo.completado:
            todo.delete()
    serializer = TareaMiniSerializer(Tarea.objects.all(), many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def filtrarTareasCompletadas(request):
    serializer = TareaMiniSerializer(Tarea.objects.filter(completado=True), many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def filtrarTareasNoCompletadas(request):
    serializer = TareaMiniSerializer(Tarea.objects.filter(completado=False), many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def obtenerComentarios(request, pk):
    serializer = TareaSerializer(Tarea.objects.get(pk=pk), many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def insertarComentario(request):
    data = request.data
    tarea = Tarea.objects.get(pk=int(data.get('todoId')))
    Comentario.objects.create(
        tarea=tarea,
        texto=data.get('texto')
    )
    tarea.save()
    serializer = TareaSerializer(tarea, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)
