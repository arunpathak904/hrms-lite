from rest_framework import serializers
from .models import Employee, Attendance

class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = '__all__'


from rest_framework import serializers
from .models import Employee, Attendance

class AttendanceSerializer(serializers.ModelSerializer):
    employee_id = serializers.CharField(write_only=True)
    employee_name = serializers.CharField(
        source="employee.full_name",
        read_only=True
    )

    class Meta:
        model = Attendance
        fields = ['id', 'employee_id', 'employee', 'employee_name', 'date', 'status']
        read_only_fields = ['employee']
        validators = [] 

    def validate_employee_id(self, value):
        if not Employee.objects.filter(employee_id=value).exists():
            raise serializers.ValidationError("Employee not found")
        return value

    def create(self, validated_data):
        employee_id = validated_data.pop('employee_id')
        employee = Employee.objects.get(employee_id=employee_id)
        date = validated_data.get('date')
        status = validated_data.get('status')

        attendance, created = Attendance.objects.update_or_create(
            employee=employee,
            date=date,
            defaults={'status': status}
        )

        return attendance


