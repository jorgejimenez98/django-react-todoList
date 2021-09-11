from django.urls import path
from . import views

urlpatterns = [
    path('tareas/eliminar/<int:pk>/', views.eliminarTarea, name='eliminarTarea'),
    path('tareas/completar/<int:pk>/', views.completarTarea, name='completar'),
    path('tareas/insertar/', views.insertarTarea, name='insertarTarea'),
    path('tareas/eliminarCompletados/', views.eliminarCompletados, name='eliminarCompletados'),
    path('tareas/completadas/', views.filtrarTareasCompletadas, name='filtrarTareasCompletadas'),
    path('tareas/noCompletadas/', views.filtrarTareasNoCompletadas, name='filtrarTareasNoCompletadas'),
    path('tareas/', views.obtenerTareas, name='obtenerTareas'),
    path('tarea/detalles/<int:pk>/', views.obtenerComentarios, name='obtenerComentarios'),
    path('tarea/insertarComentario/', views.insertarComentario, name='insertarComentario'),
]
