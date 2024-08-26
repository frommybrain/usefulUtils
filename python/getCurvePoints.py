import bpy
import bmesh
from mathutils import Vector

def get_world_coordinates(point, obj):
    world_matrix = obj.matrix_world
    return world_matrix @ point.co

def get_mesh_points(obj):
    mesh = obj.data
    bm = bmesh.new()
    bm.from_mesh(mesh)
    bm.verts.ensure_lookup_table()
    return [get_world_coordinates(v, obj) for v in bm.verts]

def blender_to_threejs_coords(point):
    # Swap Y and Z, negate Z to match Three.js coordinate system
    return Vector((point.x, point.z, -point.y))

active_obj = bpy.context.active_object
curve_points = []

if active_obj:
    print(f"Selected object: {active_obj.name}, Type: {active_obj.type}")
    
    if active_obj.type == 'CURVE':
        for spline in active_obj.data.splines:
            print(f"Spline type: {spline.type}")
            if spline.type == 'BEZIER':
                curve_points.extend([blender_to_threejs_coords(get_world_coordinates(point, active_obj)) for point in spline.bezier_points])
            elif spline.type in ['POLY', 'NURBS']:
                curve_points.extend([blender_to_threejs_coords(get_world_coordinates(point, active_obj)) for point in spline.points])
    elif active_obj.type == 'MESH':
        curve_points = [blender_to_threejs_coords(point) for point in get_mesh_points(active_obj)]
else:
    print("No active object selected.")

print("curvePoints = [")
for cp in curve_points:
    print(f"    [{cp.x:.2f}, {cp.y:.2f}, {cp.z:.2f}],")
print("];")
print(f"Total points: {len(curve_points)}")