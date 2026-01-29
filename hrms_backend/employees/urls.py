from django.urls import path
from .views import (
    EmployeeListCreateAPIView,
    EmployeeDeleteAPIView,
    AttendanceCreateAPIView,
    AttendanceByEmployeeAPIView
)

urlpatterns = [
    path('employees/', EmployeeListCreateAPIView.as_view()),
    path('employees/<int:pk>/', EmployeeDeleteAPIView.as_view()),
    path('attendance/', AttendanceCreateAPIView.as_view()),
    path('attendance/<str:employee_id>/', AttendanceByEmployeeAPIView.as_view()),
]
