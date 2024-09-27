import { useMutation, useQuery } from '@tanstack/react-query';
import { obtenerExamenPorCurso, obtenerExamenPorId } from '../api/examApi';

function useExamen({ cursoId, examenId }) {
  console.log(cursoId);
  
  const { data: examenes, isLoading: isExamenesLoading } = useQuery({
    queryKey: ['examenes'],
    queryFn: () => obtenerExamenPorCurso(cursoId),
    enabled: Boolean(cursoId),
  });

  const { data: examen, isLoading: isExamenLoading } = useQuery({
    queryKey: ['examen'],
    queryFn: () => obtenerExamenPorId(examenId),
    enabled: Boolean(examenId),
  });

  /*
  const resultMutation = useMutation({
    mutationKey: ['nuevoExamen'],
    mutationFn: postResultExamen,
    onError: err => console.log('Error al subir la respuesta', err),
    onSuccess: () => {
      alert('Respuesta guardada');
      setLocation('/dashboard');
    },
  });*/

  return {
    examenes,
    examen,
    isExamenesLoading,
    isExamenLoading
  };
}

export default useExamen;
