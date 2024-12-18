<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        $students = Student::all();
        
        $response = [
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    public function store(Request $request)
    {
       $input = [
        'nama' => $request->nama,
        'nim' => $request->nim,
        'email' => $request->email,
        'jurusan' => $request->jurusan
       ];

       $students = Student::create($input);

       $response = [
        'message' => 'Successfully create new student',
        'data' => $students
       ];
       
       return response()->json($response, 201);
    }

    public function update(Request $request, $id) {
        $student = Student::findOrFail($id);
        $student->update($request->all());
        return response()->json($student, 200);
    }

    public function destroy($id) {
        Student::destroy($id);
        return response()->json(null, 204);
    }

    public function show($id)
    {
        // cari id student yang ingin didapatkan
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];

            // mengembalikan data (json) dan kode 200
            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];

            // mengembalikan data (json) dan kode 404
            return response()->json($data, 404);
        }
    }

}
