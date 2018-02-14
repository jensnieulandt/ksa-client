export interface Event {
  id: number;
  event_type_id: number;
  group_id: number;
  user_id: number;
  last_updated_by: number;
  event_page_id: number;
  published: boolean;
  title: string;
  description: string;
  allDay: number;
  start: string;
  end: string;
  url: string;
  className: string;
  editable: boolean;
  startEditable: boolean;
  durationEditable: boolean;
  resourceEditable: boolean;
  rendering: string;
  overlap: boolean;
  constraint: boolean;
  source: string;
  color: string;
  backgroundColor: string;
  borderColor: string;
  textColor: string;
}
