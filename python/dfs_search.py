def dfs_iterative(graph, start):
    # Pilha para controlar a ordem de visita (LIFO)
    stack = [start]
    
    # Conjunto para marcar nós já visitados
    visited = set([start])
    
    print(f"Começando a busca a partir do nó: {start}\n")
    
    while stack:
        # Remove o último elemento da pilha
        node = stack.pop()
        print(f"Visitando nó: {node}")
        
        # Percorre os vizinhos do nó atual
        for neighbor in reversed(graph[node]):  # reversed para manter a ordem "natural"
            if neighbor not in visited:
                visited.add(neighbor)    # Marca como visitado
                stack.append(neighbor)   # Adiciona na pilha
                print(f"  Adicionando {neighbor} à pilha")

# Grafo de exemplo
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E']
}

# Executa DFS
print("DFS Iterativo:")
dfs_iterative(graph, 'A')


# recursivo
def dfs_recursive(graph, node, visited=None):
    if visited is None:
        visited = set()
    if node not in visited:
        print(f"Visitando nó: {node}")
        visited.add(node)
        for neighbor in graph.get(node, []):
            if neighbor not in visited:
                dfs_recursive(graph, neighbor, visited)
    return visited

# Executa DFS recursivo
print("\nDFS Recursivo:")
dfs_recursive(graph, 'A')


# Recursivo 2
def dfs_recursive2(graph, node, visited=None):
    if visited is None:
        visited = set()
    
    visited.add(node)
    print(f"Visitando nó: {node}")
    
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs_recursive(graph, neighbor, visited)

# Executa DFS recursivo
print("\nDFS Recursivo 2:")
dfs_recursive2(graph, 'A')
