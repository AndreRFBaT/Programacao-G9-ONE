from collections import deque

def bfs(graph, start):
    # Fila para controlar a ordem de visita (FIFO)
    queue = deque([start])

    # Conjunto para marcar nós já visitados (evita ciclos)
    visited = set([start])

    print(f"Começando a busca a partir do nó: {start}\n")

    while queue:
        # Remove o primeiro elemento da fila
        node = queue.popleft()
        print(f"Visitando nó: {node}")

        # Percorre todos os vizinhos do nó atual
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)  # Marca como visitado
                queue.append(neighbor) # Coloca na fila para visitar depois
                print(f"  Adicionando {neighbor} à fila")

# Grafo de exemplo (representado como lista de adjacências)
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Executa BFS
bfs(graph, 'A')


dictionary = {
    'A': [1, 2, 3, 'gato'],
    'B': [2, 3, 4],
    'C': [3, 4, 5],
}

print("\nDicionário de exemplo:")
for key, value in dictionary.items():
    print(f"  {key}: {value}")
    for item in value:
        print(f"    {item}")

print(dictionary)