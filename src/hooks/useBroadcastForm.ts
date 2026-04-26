import { useState } from 'react';
import { useToast } from '@/components/Toast';
import { useAuth } from '@/components/Auth';
import { useData } from '@/components/DataContext';
import { getRoleCopy } from '@/lib/roleCopy';
import { ExperiencePost, ProjectPost } from '@/types';

export function useBroadcastForm(onSuccess?: () => void) {
  const [content, setContent] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  
  const { toast } = useToast();
  const { isRegistered, role } = useAuth();
  const { broadcastPost } = useData();
  const copy = getRoleCopy(role);

  const handleSubmit = (nodeType: 'project' | 'experience', e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    if (!isRegistered) {
      toast(copy.toasts.broadcastError, 'warning');
      return;
    }

    setIsBroadcasting(true);
    
    const tagsArray = tagsInput.split(',').map(t => t.trim()).filter(Boolean);

    // Simulate network delay
    setTimeout(() => {
      const basePost = {
        id: `${nodeType.charAt(0)}-${Date.now()}`,
        creator: copy.broadcastCreator,
        signature: 'Local',
        timestamp: new Date().toISOString(),
        metrics: { acknowledgements: 0, audits: 0, forks: 0 }
      };

      if (nodeType === 'experience') {
        broadcastPost({
          ...basePost,
          type: 'experience',
          content: content.trim(),
          tags: tagsArray.length > 0 ? tagsArray : [copy.defaultTag]
        } as ExperiencePost);
      } else {
        broadcastPost({
          ...basePost,
          type: 'project',
          name: copy.broadcastProjectName,
          tagline: copy.broadcastProjectTag,
          description: content.trim(),
          heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
          caseStudy: {
            problem: copy.broadcastProblem,
            solution: content.trim(),
            impact: copy.broadcastImpact
          },
          implementation: {
            logicNodes: [
              { id: '1', label: copy.initLogicLabel, detail: copy.broadcastLogic }
            ]
          }
        } as ProjectPost);
      }

      setIsBroadcasting(false);
      toast(copy.toasts.broadcastSuccess, 'success');
      setContent('');
      setTagsInput('');
      if (onSuccess) onSuccess();
    }, 1500);
  };

  return {
    content,
    setContent,
    tagsInput,
    setTagsInput,
    isBroadcasting,
    handleSubmit,
    copy
  };
}
