import bpy
import math

def blender_to_r3f_coords(coord):
    # Blender uses right-handed Y-up, R3F uses right-handed Y-up
    return [coord.x, coord.z, -coord.y]

def format_vector(vec):
    return f"[{vec[0]:.6f}, {vec[1]:.6f}, {vec[2]:.6f}]"

# Get all selected objects
selected_objects = bpy.context.selected_objects

print("const treePositions = [")

# Process each selected object
for obj in selected_objects:
    world_pos = obj.matrix_world.translation
    r3f_pos = blender_to_r3f_coords(world_pos)
    print(f"  {format_vector(r3f_pos)},")

print("];")
